import { Button } from "@/components/ui/Button.tsx";
import { useCreateInstallationGithub } from "../hooks/useCreateInstallationGithub.ts";

export const IntegrationItem = () => {
  const { mutate } = useCreateInstallationGithub();
  return (
    <div className="border border-border rounded-md py-3 px-4 w-80">
      <div className="flex items-start gap-x-2">
        <svg
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-[36px]"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M9.66661 0C4.32825 0 0 4.44789 0 9.93501C0 14.3243 2.76977 18.0477 6.61137 19.362C7.09506 19.4529 7.27132 19.1461 7.27132 18.8826C7.27132 18.6472 7.26301 18.0221 7.25827 17.1932C4.56921 17.7934 4.00184 15.8613 4.00184 15.8613C3.56207 14.7141 2.92823 14.4085 2.92823 14.4085C2.05048 13.7919 2.9947 13.8041 2.9947 13.8041C3.96504 13.8749 4.47544 14.8281 4.47544 14.8281C5.33776 16.3461 6.73838 15.9076 7.28913 15.6539C7.37696 15.0117 7.62622 14.5738 7.90279 14.3256C5.75617 14.0749 3.49916 13.2223 3.49916 9.41539C3.49916 8.33102 3.87602 7.44425 4.49443 6.74959C4.39472 6.49832 4.06297 5.48835 4.58879 4.12038C4.58879 4.12038 5.40067 3.85325 7.24758 5.13888C8.01851 4.91872 8.84583 4.80833 9.6678 4.80467C10.4886 4.80833 11.3159 4.91872 12.088 5.13888C13.9337 3.85325 14.7438 4.12038 14.7438 4.12038C15.2714 5.48835 14.9397 6.49832 14.84 6.74959C15.4596 7.44425 15.8341 8.33102 15.8341 9.41539C15.8341 13.232 13.5735 14.0719 11.4198 14.3176C11.7669 14.6244 12.0761 15.2306 12.0761 16.1577C12.0761 17.4854 12.0643 18.5569 12.0643 18.8826C12.0643 19.1485 12.2382 19.4577 12.729 19.3608C16.5676 18.044 19.335 14.3231 19.335 9.93501C19.335 4.44789 15.0062 0 9.66661 0Z"
            className="fill-black"
          />
        </svg>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <h2 className="text-sm">Github</h2>
            <div className="flex items-center w-full gap-x-0.5">
              <div
                className={`bg-destructive/90 rounded-full size-2.5 shrink-0`}
              />
              <span className="text-destructive text-xs">Not connected</span>
            </div>
          </div>
          {/* <Button variant={"outline"} className="h-7 px-2.5">
            Enable
          </Button> */}
          <Button
            className="h-7 px-2.5"
            onClick={() => {
              mutate(undefined, {
                onSuccess: (data) => {
                  window.location.href = data.url;
                },
              });
            }}
          >
            Enable
            {/* <Link
              target="_blank"
              to={"https://github.com/apps/embedkit/installations/new"}
            >
              Enable
            </Link> */}
          </Button>
        </div>
      </div>
    </div>
  );
};
