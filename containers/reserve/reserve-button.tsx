"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/routing";

const ReserveButton = ({ arrow, path }: { arrow?: boolean; path?: string }) => {
  const locale = useParams().locale;
  return (
    <Link
      href={path ? path : "/accommodation"}
      locale={locale === "en" ? "en" : "mn"}
    >
      <Button variant={"secondary"} className="font-bold" size={"lg"}>
        Reserve {arrow && <ArrowRight className="ml-2 w-5 h-5" />}
      </Button>
    </Link>
  );
};
export default ReserveButton;