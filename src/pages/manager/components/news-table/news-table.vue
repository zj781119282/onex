<template>
  <section class="news-table">
    <div class="container">
      <table cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th>#</th>
            <th>标题</th>
            <th>描述</th>
            <th>状态</th>
            <th>推荐</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list">
            <td>{{item.id}}</td>
            <td class="ellipsis">{{item.title}}</td>
            <td class="ellipsis">{{item.description}}</td>
            <td>
              <select name="status" id="status" v-model="item.status" @change="changeStatus(item.id, item.status)">
                <option value="1">上线</option>
                <option value="-1">推迟</option>
              </select>
            </td>
            <td>
              <select name="recommend" id="recommend" v-model="item.recommend"
                      @change="changeRecommend(item.id, item.status)">
                <option value="1">推荐</option>
                <option value="-1">不推荐</option>
              </select>
            </td>
            <td>
              <a href="javascript:;" @click="editNews(item.id)">编辑</a>
              <a href="javascript:;" @click="deleteNews(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script src="./news-table.js"></script>

<style lang="scss" scoped src="./news-table.scss"></style>
