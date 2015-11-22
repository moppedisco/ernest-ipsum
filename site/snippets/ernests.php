<ul class="teaser">
  <?php foreach(page('ernest')->children()->visible() as $project): ?>
  <li class="teaser-item <?php echo 'teaser-item--'.$project->uid(); ?>">
    <div class="teaser-item__box">
      <h3><a href="<?php echo $project->url() ?>"><?php echo $project->title()->html() ?></a></h3>
      <p><?php echo $project->intro() ?> </p>
    </div>
    <a class="teaser-item__read-more" href="<?php echo $project->url() ?>">Get&nbsp;Ernest&nbsp;→</a>
    <?php if($image = $project->images()->sortBy('sort', 'asc')->first()): ?>
      <img src="<?php echo $image->url() ?>" alt="<?php echo $project->title()->html() ?>" >
    <?php endif ?>
  </li>
  <?php endforeach ?>
</ul>
