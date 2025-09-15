import { useState, type FormEvent } from "react";
import { MdEmail, MdSms } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./LayloWidget.css";

interface LayloWidgetProps {
  apiKey: string;
  className?: string;
  isVisible: boolean;
  mobile?: boolean;
}

interface SubscriptionResponse {
  data?: {
    subscribeToUser: boolean;
  };
  errors?: Array<{
    message: string;
  }>;
}

function LayloWidget({
  apiKey,
  className = "",
  isVisible,
  mobile = false,
}: LayloWidgetProps) {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [subscriptionType, setSubscriptionType] = useState<"email" | "phone">(
    "phone"
  );

  // Helper function to try different phone number formats
  const tryPhoneSubscription = async (phoneNumber: string) => {
    const phoneFormats = [
      // E.164 format with +
      phoneNumber.startsWith("+") ? phoneNumber : `+${phoneNumber}`,
      // Raw number without +
      phoneNumber.replace("+", ""),
      // Just the number as is
      phoneNumber,
    ];

    for (const format of phoneFormats) {
      try {
        console.log(`Trying phone format: ${format}`);

        const response = await fetch("https://laylo.com/api/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            query: `
              mutation($phoneNumber: String) {
                subscribeToUser(phoneNumber: $phoneNumber)
              }
            `,
            variables: { phoneNumber: format },
          }),
        });

        const result: SubscriptionResponse = await response.json();

        // Debug logging
        console.log(`Phone format ${format} response:`, result);
        console.log(`Phone format ${format} status:`, response.status);

        if (!result.errors && result.data?.subscribeToUser) {
          console.log(`Success with phone format: ${format}`);
          return { success: true };
        } else if (
          result.errors &&
          !result.errors[0].message.includes("nationalNumber")
        ) {
          console.error(`Phone format ${format} errors:`, result.errors);
          // If it's not a format error, don't try other formats
          return { success: false, error: result.errors[0].message };
        }
      } catch (error) {
        console.error(`Error with format ${format}:`, error);
      }
    }

    return { success: false, error: "Unable to process phone number format" };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      // Debug logging for production
      console.log(
        "Laylo API Key:",
        apiKey ? `${apiKey.substring(0, 20)}...` : "MISSING"
      );
      console.log("Subscription type:", subscriptionType);
      console.log("Environment:", import.meta.env.MODE);

      // const variables: { email?: string; phoneNumber?: string } = {};

      if (subscriptionType === "email" && email) {
        const response = await fetch("https://laylo.com/api/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            query: `
              mutation($email: String) {
                subscribeToUser(email: $email)
              }
            `,
            variables: { email },
          }),
        });

        const result: SubscriptionResponse = await response.json();

        // Debug logging
        console.log("Email subscription response:", result);
        console.log("Response status:", response.status);

        if (result.errors) {
          console.error("Email subscription errors:", result.errors);
          setMessage(`Error: ${result.errors[0].message}`);
        } else if (result.data?.subscribeToUser) {
          setMessage("Successfully subscribed! 🎉");
          setEmail("");
        } else {
          setMessage("Subscription failed. Please try again.");
        }
      }

      if (subscriptionType === "phone" && phoneNumber) {
        // Basic validation for phone number (should be at least 10 digits)
        if (phoneNumber.length < 10) {
          setMessage("Please enter a valid phone number");
          setIsLoading(false);
          return;
        }

        // Try different phone number formats
        const phoneResult = await tryPhoneSubscription(phoneNumber);

        // Debug logging
        console.log("Phone subscription result:", phoneResult);

        if (phoneResult.success) {
          setMessage("Successfully subscribed! 🎉");
          setPhoneNumber("");
        } else {
          console.error("Phone subscription failed:", phoneResult.error);
          setMessage(
            `Error: ${phoneResult.error || "Unable to subscribe with this phone number"}`
          );
        }
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
      console.error("Subscription error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`border-primary/20 h-[15rem] transform rounded-lg bg-transparent p-6 backdrop-blur-sm transition-all duration-300 ${
        mobile ? "w-full" : "max-w-[33%]"
      } ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0"
      } ${className}`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* // ! Subscription Type Toggle */}
        <div className="flex gap-2 self-end">
          <button
            type="button"
            onClick={() => setSubscriptionType("phone")}
            className={`flex h-10 w-11 cursor-pointer items-center justify-center rounded-full p-3 transition-all ${
              subscriptionType === "phone"
                ? "bg-primary text-dark-slate"
                : "text-primary border-primary/50 hover:bg-primary/10 border bg-transparent"
            }`}
            title="Text Updates"
          >
            <MdSms size={24} />
          </button>
          <button
            type="button"
            onClick={() => setSubscriptionType("email")}
            className={`flex h-10 w-11 cursor-pointer items-center justify-center rounded-full p-3 transition-all ${
              subscriptionType === "email"
                ? "bg-primary text-dark-slate"
                : "text-primary border-primary/50 hover:bg-primary/10 border bg-transparent"
            }`}
            title="Email Updates"
          >
            <MdEmail size={24} />
          </button>
        </div>

        {/* // ! Input Field */}
        {subscriptionType === "email" ? (
          <input
            id="input-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="h-12 w-full rounded-lg bg-black/50 px-4 text-white placeholder-gray-400 focus:outline-none"
            style={{
              height: "48px",
              border: "1px solid rgba(84, 84, 198, 0.3)",
              borderWidth: "1px",
              boxSizing: "border-box",
            }}
            onFocus={(e) => {
              e.target.style.border = "1px solid rgba(84, 84, 198, 0.3)";
              e.target.style.borderWidth = "1px";
              e.target.style.boxShadow = "none";
            }}
          />
        ) : (
          <div className="phone-input-container">
            <PhoneInput
              country="us"
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              placeholder="Enter your phone number"
              isValid={() => true}
              disableCountryCode={false}
              disableDropdown={false}
              enableSearch
              searchPlaceholder="Search countries..."
            />
          </div>
        )}

        {/* // ! Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary text-dark-slate border-primary/50 btn-hover-effect btn-small-padding cursor-pointer rounded-full border-2 text-lg font-bold transition-all lg:text-xl"
        >
          {isLoading
            ? "Subscribing..."
            : `Get ${subscriptionType === "email" ? "Email" : "Text"} Updates`}
        </button>

        {/* // ! Status Message */}
        {message && (
          <p
            className={`text-center text-sm ${
              message.includes("Successfully")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        {/* // ! Legal Disclaimer - Required by Laylo */}
        <div className="space-y-1 text-right text-xs text-gray-400">
          <p>
            By subscribing, you agree to Laylo's{" "}
            <a
              href="https://laylo.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://laylo.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LayloWidget;
