from rest_framework.pagination import PageNumberPagination


class BarmhaPagination(PageNumberPagination):
    page_size = 30
    page_size_query_param = "page_size"
    max_page_size = 100

    def get_paginated_response(self, data):
        response = super().get_paginated_response(data)
        next_link = self.get_next_link()
        if next_link:
            response["Link"] = f'<{next_link}>; rel="next"'
        prev_link = self.get_previous_link()
        if prev_link:
            existing = response.get("Link", "")
            sep = ", " if existing else ""
            response["Link"] = existing + sep + f'<{prev_link}>; rel="prev"'
        return response
