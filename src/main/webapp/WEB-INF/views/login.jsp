<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="ISO-8859-1" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>--%>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/style.css"/>
    <link href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/css/bootstrap.min.css" rel="stylesheet">
    <title></title>
</head>
<body>

    <c:url value="/j_spring_security_check" var="loginUrl" />

    <form class="positionByCenter" action="${loginUrl}" method="post">

        <img src="${pageContext.request.contextPath}    /resources/img/logo.png"><br><br>

        <c:if test="${param.error != null}">
            <div style="color:red">
                <p>Username or password is incorrect! Please try again!!!</p>
            </div>
        </c:if>


        <div class="form-group">
            <label for="j_username">Email address</label>
                <input type="email" class="form-control" id="j_username" placeholder="Email" name="username">
        </div>
        <div class="form-group">
            <label for="j_password">Password</label>
                <input type="password" class="form-control" id="j_password" placeholder="Password" name="password">
        </div>
        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/></strong>
        <button type="submit" class="btn btn-default" value="Login">Sign in</button>
    </form>

</body>
</html>
