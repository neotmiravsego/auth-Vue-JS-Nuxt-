<template>
  <div class="container">
    <div class="wrap-inf__user">
      <div class="avatar-user__wrap">
        <img :src="userInf.avatar" alt="Изображение Юзера" class="user-avatar" />
      </div>
      <div class="inf-user">
        <p class="name-user">Ваше имя: {{userInf.name}}</p>
        <p class="user-email">Ваш Email: {{userInf.email}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInf: {}
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      fetch("./userInfo.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.userInf = data;
        });
    }
  }
};
</script>
<style lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
}
p {
  text-align: left;
  font-size: 18px;
}
.user-avatar {
  width: 100%;
  max-width: 500px;
}
img {
  border-radius: 5px;
}
.inf-user {
  p {
    font-size: 24px;
    text-align: center;
  }
}
</style>