import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {

    return (
        <>
            <Head title="Welcome" />
            <header className="">
                <nav className="flex flex-1 justify-end p-3">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="rounded-md px-3 py-2 bg-indigo-500 text-white"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                    className="rounded-md px-3 py-2 bg-indigo-500 text-white"
                        >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded-md px-3 py-2 bg-indigo-500 text-white"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </header>

            <main className="p-3">
                <h1>HOME PAGE</h1>
            </main>
        </>
    );
}
