import React, { useState } from "react";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Discover from "./components/Discover";
import New from "./components/New";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Form from "./components/Form";

const App = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = (e) => {
        e.preventDefault();
        setIsFormOpen(true);
    };

    const closeForm = () => {
        // e.preventDefault();
        setIsFormOpen(false);
    };

    return (
        <main className="flex flex-col w-full h-full gap-y-8 relative">
            <Hero openForm={openForm} />
            <Philosophy openForm={openForm} />
            <Discover openForm={openForm} />
            <New openForm={openForm} />
            <Newsletter openForm={openForm} />
            <Footer />
            {isFormOpen && <Form closeForm={closeForm} />}
        </main>
    );
};

export default App;
