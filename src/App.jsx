import './App.css';
import LeftPanel from './layouts/LefaPanel/LeftPanel.jsx';
import Body from './layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import {useState} from 'react';


function App() {

	const INITIAL_DATA = [
		// {
		// 	id: 1,
		// 	title: 'Подготовка в обновлению курсов',
		// 	date: new Date(),
		// 	text: 'Сегодня я начал подготовку к обновлению курсов.' +
		//   ' Я решил начать с курса по React.' +
		//   ' Первым делом я решил обновить все зависимости.' +
		//   ' После этого я приступил к обновлению кода.' +
		//   ' Я начал с компонента Button.'
		// },
		// {
		// 	id: 2,
		// 	title: 'Обновление компонента Button',
		// 	date: new Date(),
		// 	text: 'Сегодня я начал обновление компонента Button.' +
		//   ' Я решил начать с обновления стилей.' +
		//   ' После этого я приступил к обновлению кода.' +
		//   ' Я начал с обновления импортов.'
		// }
	];

	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item => {
		setItems([...items, {
			title: item.title,
			date: new Date(item.date),
			text: item.text,
			id: items.length >0 ? Math.max(...items.map(i => i.id)) + 1 : 1
		}]);
	};


	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList items={items}/>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
		</div>
	);
}

export default App;
