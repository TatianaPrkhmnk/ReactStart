import PropTypes from 'prop-types';

// // title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.

export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      
  {title && <h2 className="title">{title}</h2>}

  <ul class="stat-list">
    <li class="item">
          <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
}