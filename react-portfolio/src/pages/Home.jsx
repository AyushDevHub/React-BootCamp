import ThemeToggle from "../components/ThemeToggle.jsx";
import StarBackground from "../components/StarBackground.jsx";

export default function Home() {
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle/>
            <StarBackground />
        </div>
    );
}
