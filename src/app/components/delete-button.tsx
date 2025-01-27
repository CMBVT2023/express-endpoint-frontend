import useDeleteRequest from "@/utils/delete-request"

interface DeleteButtonProps {
    id: number
}

export default function DeleteButton({ id }: DeleteButtonProps) {
    const { error, isSuccess, mutateAsync } = useDeleteRequest({endpointString: "car", associatedKeyString: "allCars"})

    function handleClick() {
        const userChoice = confirm("Warning this action cannot be undone! Press confirm to continue.")

        if (!userChoice) return;

        mutateAsync(id)
    }

    return (
        <button onClick={handleClick}>
            Delete
        </button>
    )
}
