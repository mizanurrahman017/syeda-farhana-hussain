import React, { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { FaUsers, FaCalendarAlt, FaCalendarDay } from "react-icons/fa";

const Achievements = ({ refProp }) => { // refProp added
    const [stats, setStats] = useState({
        total: 0,
        month: 0,
        today: 0,
    });

    // SSC 2025 Data
    const sscData = {
        totalStudents: 27,
        totalPassed: 24,
        gpa5: 0,
    };

    useEffect(() => {
        const now = new Date();
        const todayDate = now.toDateString();
        const currentMonth = now.getMonth();

        let storedData = JSON.parse(localStorage.getItem("visitorData"));

        if (!storedData) {
            storedData = {
                total: 0,
                month: 0,
                today: 0,
                lastVisitDate: todayDate,
                lastMonth: currentMonth,
            };
        }

        if (storedData.lastVisitDate !== todayDate) {
            storedData.today = 0;
            storedData.lastVisitDate = todayDate;
        }

        if (storedData.lastMonth !== currentMonth) {
            storedData.month = 0;
            storedData.lastMonth = currentMonth;
        }

        storedData.total += 1;
        storedData.month += 1;
        storedData.today += 1;

        localStorage.setItem("visitorData", JSON.stringify(storedData));
        setStats(storedData);
    }, []);

    const sscChartData = [
        {
            name: "SSC 2025",
            Total: sscData.totalStudents,
            Passed: sscData.totalPassed,
            GPA5: sscData.gpa5,
        },
    ];

    return (
        <div ref={refProp} style={{ textAlign: "center", marginBottom: "60px" }}>
            {/* Section Title */}
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
                <h2
                    style={{
                        fontSize: "42px",
                        fontWeight: "700",
                        color: "#1e3a8a",
                        marginBottom: "15px",
                        letterSpacing: "1px",
                    }}
                >
                    Our Achievements & Statistics
                </h2>
                <div
                    style={{
                        width: "80px",
                        height: "4px",
                        background: "linear-gradient(90deg, #4e73df, #1cc88a)",
                        margin: "0 auto",
                        borderRadius: "5px",
                    }}
                ></div>
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "30px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                {/* Left Side - Visitor */}
                <div
                    style={{
                        background: "#ffffff",
                        padding: "30px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        width: "400px",
                        transition: "all 0.3s ease",
                        marginBottom: "30px",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0px)";
                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
                    }}
                >
                    <h3
                        style={{
                            fontSize: "26px",
                            fontWeight: "700",
                            color: "#1e3a8a",
                            marginBottom: "8px",
                            position: "relative",
                            display: "inline-block",
                        }}
                    >
                        Visitor Statistics
                    </h3>

                    <StatCard
                        icon={<FaUsers />}
                        title="Total Visitors"
                        value={stats.total}
                        color="#4e73df"
                    />
                    <StatCard
                        icon={<FaCalendarAlt />}
                        title="This Month"
                        value={stats.month}
                        color="#1cc88a"
                    />
                    <StatCard
                        icon={<FaCalendarDay />}
                        title="Today"
                        value={stats.today}
                        color="#f6c23e"
                    />
                </div>

                {/* Right Side - Academic Graph */}
                <div
                    style={{
                        background: "#ffffff",
                        padding: "30px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        width: "600px",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0px)";
                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
                    }}
                >
                    <h3
                        style={{
                            fontSize: "26px",
                            fontWeight: "700",
                            color: "#1e3a8a",
                            marginBottom: "8px",
                            display: "inline-block",
                        }}
                    >
                        Academic Performance (SSC 2025)
                    </h3>

                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={sscChartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Total" fill="#4e73df" />
                            <Bar dataKey="Passed" fill="#1cc88a" />
                            <Bar dataKey="GPA5" fill="#36b9cc" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ icon, title, value, color }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "20px",
            }}
        >
            <div
                style={{
                    background: color,
                    color: "#fff",
                    padding: "15px",
                    borderRadius: "50%",
                    fontSize: "18px",
                }}
            >
                {icon}
            </div>
            <div>
                <h4 style={{ margin: 0, color: "#858796" }}>{title}</h4>
                <h2 style={{ margin: "5px 0 0 0", color: "#5a5c69" }}>{value}</h2>
            </div>
        </div>
    );
};

export default Achievements;