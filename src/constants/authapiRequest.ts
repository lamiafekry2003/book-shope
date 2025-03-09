export async function apiRequest(endpoint: string, method: string, values: object) {
    try {
        const response = await fetch(endpoint, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Something went wrong");
        }

        return { success: true, message: data.message, data: data?.data || null };
    } catch (error) {
        return { success: false, message: error instanceof Error ? error.message : "An error occurred" };
    }
}
