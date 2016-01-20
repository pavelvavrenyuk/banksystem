<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
<html >
    <head>
        <meta charset="utf-8">
        <title>DIY One-way Data Binding</title>
        <link rel="stylesheet" type="text/css" href="/resources/css/style.css"/>
        <link href="/resources/libs/css/bootstrap.min.css" rel="stylesheet">
        <link href="/resources/libs/css/bootstrap.css" rel="stylesheet">

        <script src="/resources/libs/bower_components/angular/angular.min.js"></script>
        <script src="/resources/libs/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
        <script src="/resources/libs/bower_components/angular-ui-grid/ui-grid.min.js"></script>
        <script src="/resources/js/app.js"></script>
        <script src="/resources/js/controllers.js"></script>

        <script>

        </script>
    </head>
    <body ng-app="bankSystem">

    <security:authorize access="!isAuthenticated()">
        <jsp:include page="login.jsp"/>
    </security:authorize>

    <security:authorize access="isAuthenticated()">
    <div id="mainContainer" class="main" ng-controller="globalCtrl">

            <div id="rowWithLogo" class="row">
                <div id="bankLogo" class="col-md-1 col-md-offset-5">
                    <img src="/resources/img/logo.png"><br><br>
                </div>
            </div>

            <div id="rowWithEmailAndLogout" class="row">
                <div id="userEmail" class="col-md-4">
                    <h4>User email: <security:authentication property="principal.username" /></h4>
                </div>
                <div id="Logout" class="col-md-1 col-md-offset-7">
                    <a id="logoutLink" ng-href="${pageContext.request.contextPath}/logout">
                        <h4>Logout</h4>
                    </a>
                </div>
            </div>

            <div id="mainBorder" class="row border"></div>

            <div class="row">
                <div id="options" class="col-md-1 ">
                    <div id="button1" class="form-group">
                        <button type="submit" class="btn btn-default optionButton" ui-sref="accounts">Accounts</button>
                    </div>
                    <div id="button2" class="form-group">
                        <button type="submit" class="btn btn-default optionButton" ui-sref="operations">Operations</button>
                    </div>
                    <div id="button3" class="form-group">
                        <button type="submit" class="btn btn-default optionButton" ui-sref="reports">Reports</button>
                    </div>
                </div>
                <div id="contentView" class="col-md-11" ui-view></div>
            </div>
        </div>

    </security:authorize>
    </body>
</html>