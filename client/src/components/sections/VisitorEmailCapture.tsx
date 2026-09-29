import { FormEvent, useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type SubmissionState = "idle" | "saving" | "success" | "error";

export function VisitorEmailCapture() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("saving");
    setMessage("");

    try {
      const response = await fetch("/api/visitor-emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();

      if (!response.ok) {
        setState("error");
        setMessage(result.message ?? "Please enter a valid email address.");
        return;
      }

      setState("success");
      setMessage(result.message);
      setEmail("");
    } catch {
      setState("error");
      setMessage("Unable to save your email right now. Please try again.");
    }
  };

  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Mail className="h-5 w-5" />
        </div>
        <CardTitle className="text-lg">Stay in touch</CardTitle>
        <CardDescription>
          Leave your email if you would like to connect about opportunities or future updates.
          Your email is saved only when you submit this form.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            aria-label="Your email address"
            disabled={state === "saving"}
          />
          <Button type="submit" disabled={state === "saving"} className="shrink-0">
            {state === "saving" ? "Saving..." : "Save my email"}
          </Button>
        </form>
        {message && (
          <p
            className={`mt-3 flex items-center gap-2 text-sm ${
              state === "error" ? "text-destructive" : "text-primary"
            }`}
            role="status"
          >
            {state === "success" && <CheckCircle2 className="h-4 w-4" />}
            {message}
          </p>
        )}
      </CardContent>
    </Card>
  );
}