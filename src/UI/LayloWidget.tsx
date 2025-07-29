import { useState, type FormEvent } from "react";
import { MdEmail, MdSms } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./LayloWidget.css";

interface LayloWidgetProps {
  apiKey: string;
  className?: string;
}

interface SubscriptionResponse {
  data?: {
    subscribeToUser: boolean;
  };
  errors?: Array<{
    message: string;
  }>;
}

function LayloWidget({ apiKey, className = "" }: LayloWidgetProps) {
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

        if (!result.errors && result.data?.subscribeToUser) {
          console.log(`Success with phone format: ${format}`);
          return { success: true };
        } else if (
          result.errors &&
          !result.errors[0].message.includes("nationalNumber")
        ) {
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

        if (result.errors) {
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

        if (phoneResult.success) {
          setMessage("Successfully subscribed! 🎉");
          setPhoneNumber("");
        } else {
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
      className={`border-primary/20 h-[15rem] max-w-[50%] rounded-lg bg-transparent p-6 backdrop-blur-sm lg:max-w-[30%] ${className}`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* // ! Subscription Type Toggle */}
        <div className="flex gap-2 self-end">
          <button
            type="button"
            onClick={() => setSubscriptionType("phone")}
            className={`flex h-10 w-10 items-center justify-center rounded-full p-3 transition-all ${
              subscriptionType === "phone"
                ? "bg-primary text-dark-slate"
                : "text-primary border-primary/50 hover:bg-primary/10 border bg-transparent"
            }`}
            title="Text Updates"
          >
            <MdSms size={20} />
          </button>
          <button
            type="button"
            onClick={() => setSubscriptionType("email")}
            className={`flex h-10 w-10 items-center justify-center rounded-full p-3 transition-all ${
              subscriptionType === "email"
                ? "bg-primary text-dark-slate"
                : "text-primary border-primary/50 hover:bg-primary/10 border bg-transparent"
            }`}
            title="Email Updates"
          >
            <MdEmail size={20} />
          </button>
        </div>

        {/* // ! Input Field */}
        {subscriptionType === "email" ? (
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="border-primary/30 focus:border-primary focus:ring-primary w-full rounded-lg border bg-black/50 px-4 py-3 text-white placeholder-gray-400 focus:ring-1 focus:outline-none"
          />
        ) : (
          <div className="phone-input-container">
            <PhoneInput
              country="us"
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              placeholder="Enter your phone number"
              inputStyle={{
                width: "100%",
                height: "48px",
                fontSize: "16px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(84, 118, 198, 0.3)",
                borderRadius: "8px",
                color: "white",
                paddingLeft: "60px",
              }}
              buttonStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(84, 84, 198, 0.3)",
                borderRadius: "8px 0 0 8px",
              }}
              dropdownStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                border: "1px solid rgba(84, 84, 198, 0.3)",
                borderRadius: "8px",
                color: "white",
              }}
              searchStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                border: "1px solid rgba(84, 84, 198, 0.3)",
              }}
              enableSearch
              searchPlaceholder="Search countries..."
              containerClass="phone-input-wrapper"
              inputClass="phone-input-field"
              buttonClass="phone-input-button"
              dropdownClass="phone-input-dropdown"
            />
          </div>
        )}

        {/* // ! Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary text-dark-slate hover:bg-primary/90 h-10 w-full rounded-lg px-6 py-3 font-bold transition-all disabled:cursor-not-allowed disabled:opacity-50"
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
