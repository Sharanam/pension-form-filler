export function deleteRecord(file, id) {
    if (confirm("Are you sure you want to delete this record?")) {
        return [file.filter((_, i) => i !== id), id - 1 < 0 ? 0 : id - 1];
    }
}