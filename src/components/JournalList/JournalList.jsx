import './JournalList.css';
import CardButton from '../CardButton/CardButton.jsx';
import JournalItem from '../JournalItem/JournalItem.jsx';

function JournalList({ items }) {
	if (items.length === 0) {
		return <p>Записей пока нет, добавьте первую</p>;
	}

	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		}
		if (a.date > b.date) {
			return -1;
		}
		return 0;
	};

	return (
		<>
			{items.sort(sortItems).map(el => (
				<CardButton key={el.id}>
					<JournalItem
						title={el.title}
						date={el.date}
						text={el.text}
					/>
				</CardButton>
			))}
		</>
	);
}

export default JournalList;