function renderDefaultOverview(overview) {
    if (!overview || overview === '') {
        return 'Sorry, description is missing...'
    } else {
        return overview;
    }
}

export default renderDefaultOverview;