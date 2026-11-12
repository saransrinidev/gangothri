import type { Metadata } from "next";
import { ServiceDetail, serviceMetadata } from "@/components/ServiceDetail";

export const metadata: Metadata = serviceMetadata("jathakam");

export default function Page() {
  return <ServiceDetail slug="jathakam" />;
}
