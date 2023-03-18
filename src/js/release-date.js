function renderReleasDate(release_date) {
  if (!release_date) {
    return 'uknown';
  } else {
    return release_date.slice(0, 4);
  }
}

export default renderReleasDate;
