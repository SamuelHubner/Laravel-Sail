import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">About</h3>
                            <p>This system is built using Laravel Sail, a lightweight command-line interface for interacting with Laravel's default Docker development environment. Sail provides a simple way to run your Laravel application using Docker containers.</p>
                            <p>Some of the tools and technologies used in this system include:</p>
                            <ul className="list-disc ml-6">
                                <li>Laravel: A powerful PHP framework for building web applications.</li>
                                <li>React: A JavaScript library for building user interfaces.</li>
                                <li>Inertia.js: A framework for building single-page applications using server-side routing and controllers.</li>
                                <li>Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.</li>
                                <li>Docker: A platform for developing, shipping, and running applications using containerization.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
