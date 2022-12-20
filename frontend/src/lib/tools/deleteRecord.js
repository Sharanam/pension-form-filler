export function deleteRecord(data, index) {
    if (confirm("Are you sure you want to delete this record?")) {
        return [data.filter((_, i) => i !== index), index - 1 < 0 ? 0 : index - 1];
    }
    return [data, index];
}