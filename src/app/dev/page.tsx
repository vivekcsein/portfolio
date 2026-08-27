import { Button, Icon, Link } from "@/components/ui";
import { AlignmentContainer } from "@/components/ui/containers/AlignmentContainer";
import StylishIcon from "@/components/ui/icon/StylishIcon";

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

      <div className="flex size-11 shrink-0 items-center justify-center">
        <StylishIcon>
          <Icon name={"box"} className="size-5" />
        </StylishIcon>
      </div>
    </AlignmentContainer>
  );
};

export default DevPage;
