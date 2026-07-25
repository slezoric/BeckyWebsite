import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <p className="text-sm uppercase tracking-widest text-sage">404</p>
      <h1 className="mx-auto mt-4 max-w-xl text-4xl text-cream sm:text-5xl">
        This path doesn&rsquo;t lead anywhere
      </h1>
      <p className="mx-auto mt-6 max-w-md text-cream-muted">
        The page you&rsquo;re looking for may have moved. Let&rsquo;s get you back
        to solid ground.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <ButtonLink href="/">Return home</ButtonLink>
        <ButtonLink href="/contact/" variant="ghost">
          Contact
        </ButtonLink>
      </div>
    </Container>
  );
}
