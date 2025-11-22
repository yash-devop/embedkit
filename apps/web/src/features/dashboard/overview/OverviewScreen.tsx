import { useGetIntegration } from "../integrations/hooks/useGetIntegration.ts";
import { EmptyState } from "../shared/EmptyState.tsx";
export const OverviewScreen = () => {
  const { data } = useGetIntegration();

  return (
    <div className="h-full w-full  flex flex-col items-center justify-center">
      {data && data.data.userId ? (
        <div>
          <span>Im editor</span>
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};
