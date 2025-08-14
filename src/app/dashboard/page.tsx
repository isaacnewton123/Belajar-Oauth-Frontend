import ProfileDashboard from "@/components/ui/dashboard"

const DashboardPage = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900">

            {/* <!-- Kontainer utama untuk menengahkan konten --> */}
            <div className="min-h-screen flex items-center justify-center p-4">
                <ProfileDashboard />
            </div>
        </div>
    )
}

export default DashboardPage