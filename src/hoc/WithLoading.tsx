import ClipLoader from "react-spinners/ClipLoader";
import { ComponentType } from "react";
import useFetch from "../hooks/useFetch";

type FetchData<T> = () => Promise<T>;

interface WithLoadingProps<T> {
  data: T;
}

export const withLoading = <T, P extends WithLoadingProps<T>>(
  WrappedComponent: ComponentType<P>,
  fetchData: FetchData<T>
) => {
  return (props: Omit<P, keyof WithLoadingProps<T>>) => {
    const { data, isLoading, error } = useFetch(fetchData);

    if (isLoading) {
      return (
        <div className="loader">
          <ClipLoader size={100} color="#669e76" />
        </div>
      );
    }

    if (error) throw new Error(error);

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
