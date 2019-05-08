<template>
  <!-- Navbar component -->
  <div>
    <Row class="nav" type="flex" justify="center">
      <Col :xs="23" :sm="22" :md="22" :lg="22">
        <Icon class="menu" type="navicon" @click.native="nav !== true ? nav = true : nav = false"/>
      </Col>
    </Row>
    <div v-if="nav" class="navlist">
      <Icon class="menu" type="close" @click.native="nav !== true ? nav = true : nav = false"></Icon>
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
        <li>Menu 4</li>
      </ul>
      <div id="fixed-social">
        <div>
          <a class="fixed-facebook" target="_blank">
            <Icon type="social-facebook"></Icon>
            <span>Facebook</span>
          </a>
        </div>
        <div>
          <a class="fixed-twitter" target="_blank">
            <Icon type="social-twitter"></Icon>
            <span>Twitter</span>
          </a>
        </div>
        <div>
          <a class="fixed-gplus" target="_blank">
            <Icon type="social-googleplus"></Icon>
            <span>Google+</span>
          </a>
        </div>
        <div>
          <a class="fixed-linkedin" target="_blank">
            <Icon type="social-linkedin"></Icon>
            <span>LinkedIn</span>
          </a>
        </div>
        <div>
          <a class="fixed-instagrem" target="_blank">
            <Icon type="social-instagram"></Icon>
            <span>Instagram</span>
          </a>
        </div>
        <div>
          <a class="fixed-tumblr" target="_blank">
            <Icon type="social-tumblr"></Icon>
            <span>Tumblr</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"/>
<style src="./index.css" />
