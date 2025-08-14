const ProfileDashboard = () => {
    return(
        <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            
            <div className="flex flex-col items-center">
                {/* <!-- Avatar Placeholder -->
                <!-- Karena avatar null, kita buat placeholder dengan inisial nama --> */}
                <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4 border-4 border-white dark:border-gray-800">
                    <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-300">NP</span>
                </div>

                {/* <!-- Nama Pengguna --> */}
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Nama Pengguna</h1>
                
                {/* <!-- Email Pengguna --> */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">user@example.com</p>
            </div>

            {/* <!-- Garis Pemisah --> */}
            <div className="my-6 border-gray-200 dark:border-gray-700"/>

            {/* <!-- Detail Informasi Profil --> */}
            <div className="space-y-4 text-sm">
                {/* <!-- ID Pengguna --> */}
                <div className="flex justify-between">
                    <span className="font-medium text-gray-500 dark:text-gray-400">ID Pengguna</span>
                    <span className="font-semibold text-gray-700 dark:text-gray-200">user_id</span>
                </div>
                {/* <!-- Role --> */}
                <div className="flex justify-between">
                    <span className="font-medium text-gray-500 dark:text-gray-400">Role</span>
                    <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs font-medium px-2.5 py-0.5 rounded-full">user</span>
                </div>
                {/* <!-- Provider --> */}
                <div className="flex justify-between">
                    <span className="font-medium text-gray-500 dark:text-gray-400">Provider</span>
                    <span className="font-semibold text-gray-700 dark:text-gray-200">local</span>
                </div>
                {/* <!-- Tanggal Bergabung --> */}
                <div className="flex justify-between">
                    <span className="font-medium text-gray-500 dark:text-gray-400">Tanggal Bergabung</span>
                    <span className="font-semibold text-gray-700 dark:text-gray-200">15 Agustus 2023</span>
                </div>
            </div>

            {/* <!-- Tombol Aksi (Contoh) --> */}
            <div className="mt-8">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                    Edit Profil
                </button>
            </div>
        </div>
    )
}

export default ProfileDashboard