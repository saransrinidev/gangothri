import type { Metadata } from "next";
import { ServiceDetail, serviceMetadata } from "@/components/ServiceDetail";

export const metadata: Metadata = serviceMetadata("prasnam");

export default function Page() {
  return <ServiceDetail slug="prasnam" />;
}
