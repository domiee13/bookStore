import React, {Component } from 'react';

import './Cover.css';

export default class Cover extends Component{
	render(){
		const text = `"Đọc sách hay cũng giống như trò chuyện với các bộ óc tuyệt vời nhất
		của những thế kỷ đã trôi qua.”`;
		return(
			<div className="Cover">
				<div className="Overlay">
					<p className="Quotes"> 
					"Đọc sách hay cũng giống như trò chuyện với các bộ óc tuyệt vời nhất
					{'\n'} của những thế kỷ {'\n'}đã trôi qua.” 
															- Rene Descartes</p>
				</div>
			</div>
		);
	}
}