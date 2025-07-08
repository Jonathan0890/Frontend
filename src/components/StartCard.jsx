const StatCard = ({ icon, title, value }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="flex justify-center">{icon}</div>
            <h3 className="text-[#7f8c8d] text-sm font-medium mb-1">{title}</h3>
            <p className="text-3xl font-semibold text-[#2c3e50]">{value}</p>
        </div>
    );
};

export default StatCard;