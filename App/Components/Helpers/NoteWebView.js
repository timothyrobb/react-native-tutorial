import React from 'react';
import {
  View,
  WebView,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F6F6EF',
		flex: 1,
		flexDirection: 'column'
	}
})

class NoteWebView extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<WebView source={{uri: this.props.url}} />
			</View>
		)
	}
}

NoteWebView.propTypes = {
	url: React.PropTypes.string.isRequired
}

export default NoteWebView;
