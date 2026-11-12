import { KeralaChart } from "@/components/illustrations";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-28 text-center">
      <KeralaChart className="w-40" />
      <Eyebrow className="mt-8 justify-center">Page not found</Eyebrow>
      <h1 className="mt-4 font-serif text-5xl text-maroon-900">This page could not be found</h1>
      <p className="mt-4 max-w-md text-brown-500">The page you are looking for may have moved. Please return to the home page.</p>
      <div className="mt-8">
        <ButtonLink href="/">Back to Home</ButtonLink>
      </div>
    </Container>
  );
}
