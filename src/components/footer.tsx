import './footer.css';

interface MilimoeFooter {
    name: string;
}

const MilimoeFooter: React.FC<MilimoeFooter> = ({ name }) => {
    return (
        <div className="container">
            <strong>{name}</strong>
            <p>©2024 <a target="_blank" rel="noopener noreferrer" href="https://milimoe.com">Milimoe</a>.</p>
        </div>
    );
};

export default MilimoeFooter;
