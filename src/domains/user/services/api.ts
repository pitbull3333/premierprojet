export const fetchUsers = async () => {
    const data = await fetch("http://127.0.0.1:800/dev");
    return data.json();
}