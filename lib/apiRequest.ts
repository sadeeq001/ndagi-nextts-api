
import toast from "react-hot-toast";

export async function makePostRequest(
    setLoading:(loading: boolean) => void,
    endpoint: string,
    data: any,
    resourceName: string,
    reset: () => void,
    redirect: () => void,
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      toast.success(`New ${resourceName} Created Successfully`);
      reset();
      redirect();
    } else {
      setLoading(false);
      if (response.status === 409) {
        toast.error("Conflict Error");
      } else {
        toast.error("Something Went wrong");
      }
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}

export async function makePutRequest(
  setLoading:(loading: boolean) => void,
  endpoint: string,
  data: any,
  resourceName: string,
  redirect: () => void,
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log(response);
      setLoading(false);
      toast.success(`${resourceName} Updated Successfully`);
      redirect();
    } else {
      setLoading(false);
      toast.error("Something Went wrong");
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}

export async function makeDeleteRequest(
  setLoading:(loading: boolean) => void,
  endpoint: string,
  data: any,
  resourceName: string,
  redirect: () => void,
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log(response);
      setLoading(false);
      toast.success(`${resourceName} Deleted Successfully`);
      redirect();
    } else {
      setLoading(false);
      toast.error("Something Went wrong");
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}