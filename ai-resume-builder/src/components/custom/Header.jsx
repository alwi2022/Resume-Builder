import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";

export default function Header() {
  const {  isLoaded, isSignedIn } = useUser();

  return (
    <header className="p-3 px-5 flex justify-between items-center shadow-md">
      <Link to="/">
        <img src="/logo.svg" width={60} height={60} alt="QuicHire" />
      </Link>

      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton/>
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button>Get Started</Button>
        </Link>
      )}
    </header>
  );
}

