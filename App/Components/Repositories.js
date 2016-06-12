import React from 'react';
import Badge from './Badge';
import Humanize from 'humanize-component';
import Separator from './Helpers/Separator'
import NoteWebView from './Helpers/NoteWebView'

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	rowContainer: {
		flexDirection: 'column',
		flex: 1,
		padding: 10
	},
	name: {
		color: '#48B8EC',
		fontSize: 18,
		paddingBottom: 5
	},
	stars: {
		color: '#48B8EC',
		fontSize: 14,
		paddingBottom: 5
	},
	description: {
		fontSize: 14,
		paddingBottom: 5
	}
})

class Repositories extends React.Component {
	openPage(url) {
		this.props.navigator.push({
			component: NoteWebView,
			title: 'Web View',
			passProps: {url}
		})
	}
	render() {
		const userInfo = this.props.userInfo
		const repos = this.props.repos
		const list = repos.map((item, index) => {
			const text = item.description
			const description = text ? <Text style={styles.description}> {text} </Text> : <View />

			return (
				<View key={index}>
					<View style={styles.rowContainer}>
						<TouchableHighlight
							onPress={this.openPage.bind(this, item.html_url)}
							underlayColor='transparent'>
							<Text style={styles.name}>{item.name}</Text>
						</TouchableHighlight>
						<Text style={styles.stars}> Stars: {item.stargazers_count} </Text>
						{description}
					</View>
					<Separator />
				</View>
			)
		})

		return (
			<ScrollView style={styles.container}>
				<Badge userInfo={userInfo} />
				{list}
			</ScrollView>
		)
	}
}

Repositories.propTypes = {
	userInfo: React.PropTypes.object.isRequired,
	repos: React.PropTypes.array.isRequired
}

export default Repositories;
