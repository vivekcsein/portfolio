import { Button, Link } from "@/components/ui";
import { AlignmentContainer } from "@/components/ui/containers/AlignmentContainer";

const DevPage = () => {
  return (
    <AlignmentContainer
      direction={"both"}
      className="w-full h-full min-h-svh flex-col gap-5"
    >
      <Link href={"/"} variant={"button"} className="p-2">
        click me here{" "}
      </Link>
      <Button variant={"primary"}>Click me here</Button>
    </AlignmentContainer>
  );
};

export default DevPage;
