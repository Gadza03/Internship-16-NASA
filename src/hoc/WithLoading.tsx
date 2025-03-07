import { ComponentType, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useErrorHandler } from "../hooks/useErrorHandler";

type FetchData<T> = () => Promise<T>;

interface WithLoadingProps<T> {
  data: T;
}

export const withLoading = <T, P extends WithLoadingProps<T>>(
  WrappedComponent: ComponentType<P>,
  fetchData: FetchData<T>
) => {
  return (props: Omit<P, keyof WithLoadingProps<T>>) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<T | null>(null);
    const { error, handleError, reset } = useErrorHandler();

    useEffect(() => {
      const fetchWithLoading = async () => {
        try {
          setIsLoading(true);
          reset();

          const response = await fetchData();

          setData(response);
        } catch (error) {
          handleError(
            error instanceof Error ? error : new Error(String(error))
          );
        } finally {
          setIsLoading(false);
        }
      };

      fetchWithLoading();
    }, []);

    if (isLoading) {
      return (
        <div className="loader">
          <ClipLoader size={100} color="#669e76" />
        </div>
      );
    }

    if (error) throw error;

    if (Array.isArray(data) && data.length === 0) {
      return (
        <div className="no-items-found">
          <p>No items found</p>
        </div>
      );
    }

    return <WrappedComponent data={data as T} {...(props as P)} />;
  };
};
