import './ExploreContainer.css';

interface ContainerProps {
    name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div className="container">
            <strong>{name}</strong>
            <p>©2024 <a target="_blank" rel="noopener noreferrer" href="https://milimoe.com">Milimoe</a>.</p>
        </div>
    );
};

export default ExploreContainer;
