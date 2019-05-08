<template>
  <div>
    <Row class="nav" type="flex" justify="center">
      <Col :xs="23" :sm="20" :md="20" :lg="20">
        <Icon type="navicon" @click.native="nav !== true ? nav = true : nav = false"/>
      </Col>
    </Row>
    <div v-if="nav" class="navlist">
      <Icon type="close" @click.native="nav !== true ? nav = true : nav = false"></Icon>
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
        <li>Menu 4</li>
      </ul>
    </div>
  </div>
</template>
<script src="./index.js"/>
<style scoped src="./index.css" />
