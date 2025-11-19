import { useEffect, useMemo, useState } from "react";
import Card from "../../components/Cards/Cards";

const Top5Restaurants = () => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchTopRestaurants = async () => {
            setLoading(true);
            setError("");
            try {
                const base = "https://gebeta-delivery1.onrender.com";
                const res = await fetch(
                    `${base}/api/v1/orders/restaurants/order-stats`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                const json = await res.json();
                if (!res.ok) {
                    throw new Error(json?.message || "Failed to load restaurant stats");
                }
                const list = Array.isArray(json?.data) ? json.data : [];
                setStats(list);
            } catch (e) {
                setError(e.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };
        fetchTopRestaurants();
    }, []);

    const topFive = useMemo(() => {
        return [...(stats || [])]
            .sort((a, b) => (Number(b?.totalOrders || 0) - Number(a?.totalOrders || 0)))
            .slice(0, 5);
    }, [stats]);

    return ( 
        <div className="font-noto">
            <Card>
                <h1 className="text-lg font-semibold mb-2">Top 5 Restaurants</h1>
                {loading && (
                    <p className="text-sm text-placeholderText">Loading...</p>
                )}
                {error && (
                    <p className="text-sm text-red-500">{error}</p>
                )}
                {!loading && !error && (
                    <>
                        {topFive.length === 0 ? (
                            <p className="text-sm text-placeholderText">No data available</p>
                        ) : (
                            <ol className="list-decimal pl-5 space-y-2">
                                {topFive.map((r, idx) => (
                                    <li key={r.restaurantId || r.restaurantName || idx} className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="font-medium">{r.restaurantName || "Unknown Restaurant"}</span>
                                            <span className="text-xs text-placeholderText">
                                                Pending: {r?.byStatus?.Pending || 0} • Preparing: {r?.byStatus?.Preparing || 0} • Completed: {r?.byStatus?.Completed || 0}
                                            </span>
                                        </div>
                                        <span className="text-sm">
                                            <span className="font-semibold text-gray-900">{Number(r?.totalOrders || 0)}</span> orders
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        )}
                    </>
                )}
            </Card>
        </div>
     );
}
 
export default Top5Restaurants;