<template>
  <form class="container-form">
    <div class="form-group">
      <label></label>
      <input type="email" v-model="user.email" required />
    </div>

    <div class="form-group">
      <label></label>
      <input type="password" v-model="user.password" required />
    </div>
    <button class="button-login" @click="sendData()">Login</button>

    <div class="form-group" v-if="userInf">
      <p>Что-то из твоих данных введенно не так</p>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      userInf: false,
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    sendData() {
      console.log(this.user.email);
      fetch("./auth.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          console.log(this.user);
          if (
            data.email === this.user.email &&
            data.password === this.user.password
          ) {
            this.$router.push({ path: "/user" });
            this.user.email = "";
            this.user.password = "";
          } else {
            this.userInf = true;
          }
        });
    }
  }
};
</script>
<style lang="scss" >
.container-form {
  max-width: 500px;
  margin: 0 auto;
}
.form-group {
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
}
input {
  border: 1px solid gray;
  padding: 5px 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  font-size: 18px;
  padding: 10px 20px;
  &:focus {
    outline: gray;
  }
}
.button-login {
  border: none;
  outline: none;
  background: gray;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  letter-spacing: 1px;
  font-size: 20px;
  cursor: pointer;
}
p {
  text-align: center;
}
</style>