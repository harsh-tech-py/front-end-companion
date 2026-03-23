import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, MessageSquare, Sun, Moon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countryCodes = [
  { code: "+1", flag: "🇺🇸", name: "US" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+91", flag: "🇮🇳", name: "IN" },
  { code: "+61", flag: "🇦🇺", name: "AU" },
  { code: "+81", flag: "🇯🇵", name: "JP" },
  { code: "+49", flag: "🇩🇪", name: "DE" },
  { code: "+33", flag: "🇫🇷", name: "FR" },
  { code: "+86", flag: "🇨🇳", name: "CN" },
  { code: "+55", flag: "🇧🇷", name: "BR" },
  { code: "+971", flag: "🇦🇪", name: "AE" },
];

const Login = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [countryCode, setCountryCode] = useState("+1");
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
    }, 1200);
  };

  const handleVerifyOtp = () => {
    if (otp.length < 6) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className={`${isDark ? "dark" : ""} flex min-h-screen items-center justify-center bg-background p-4`}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsDark(!isDark)}
        className="absolute top-4 right-4 text-foreground"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
      <div className="w-full max-w-md">
        {/* Logo / Branding */}
        <div className="mb-8 flex flex-col items-center gap-2">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
            <MessageSquare className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Welcome Back
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in to continue to your chats
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          {step === "phone" ? (
            <form onSubmit={handleSendOtp} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <Select value={countryCode} onValueChange={setCountryCode}>
                    <SelectTrigger className="w-[100px] shrink-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {countryCodes.map((c) => (
                        <SelectItem key={c.code} value={c.code}>
                          {c.flag} {c.code}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoFocus
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  We'll send you a 6-digit verification code
                </p>
              </div>

              <Button
                type="submit"
                disabled={phone.length < 10 || loading}
                className="w-full gap-2"
              >
                {loading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                ) : (
                  <>
                    Send OTP <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-foreground">
                  Enter verification code
                </p>
                <p className="text-xs text-muted-foreground">
                  Sent to <span className="font-medium text-foreground">{countryCode} {phone}</span>
                </p>
              </div>

              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button
                onClick={handleVerifyOtp}
                disabled={otp.length < 6 || loading}
                className="w-full gap-2"
              >
                {loading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                ) : (
                  <>
                    Verify & Sign In <ShieldCheck className="h-4 w-4" />
                  </>
                )}
              </Button>

              <button
                type="button"
                onClick={() => { setStep("phone"); setOtp(""); }}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Change phone number
              </button>
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          By signing in, you agree to our Terms of Service & Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
