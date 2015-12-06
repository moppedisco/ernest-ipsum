<ul class="teaser">
  <?php foreach(page('ernest')->children()->visible() as $project): ?>
  <li class="teaser-item <?php echo 'teaser-item--'.$project->uid(); ?>">
    <h3 class="teaser-item__title"><a href="<?php echo $project->url() ?>"><?php echo $project->title()->html() ?></a></h3>
    <hr>
    <div class="teaser-item__box">
      <p><?php echo $project->intro() ?> </p>
      <a class="teaser-item__read-more" href="<?php echo $project->url() ?>">Get&nbsp;Ernest&nbsp;→</a>
    </div>
  </li>
  <?php endforeach ?>
</ul>
