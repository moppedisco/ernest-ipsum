<?php snippet('header') ?>

  <?php if($prev = $page->prevVisible()): ?>
  <a class="link--prev" href="<?php echo $prev->url() ?>">&larr;</a>
  <?php endif ?>

  <main class="main" role="main" id="pjax-container">

    <div class="text">
      <h1><?php echo $page->title()->html() ?></h1>
      <div class="intro"><?php echo $page->intro()->html() ?></div>

      <div class="paragraph-selector">
        <p>Number of paragraphs</p>
        <ol>
          <li role="button">1</li>
          <li role="button">2</li>
          <li class="active" role="button">3</li>
          <li role="button">4</li>
          <li role="button">5</li>
        </ol>
      </div>
      <div class="paragraphs">
      <?php echo $page->text()->kirbytext() ?>
      </div>
    </div>

  </main>

  <?php if($next = $page->nextVisible()): ?>
  <a class="link--next" href="<?php echo $next->url() ?>">&rarr;</a>
  <?php endif ?>

<?php snippet('footer') ?>
