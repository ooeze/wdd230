import requests

def find_company_website(company_name, location):
    api_key = 'YOUR_GOOGLE_PLACES_API_KEY'
    url = f"https://maps.googleapis.com/maps/api/place/textsearch/json?query={company_name}+{location}&key={api_key}"
    
    response = requests.get(url)
    results = response.json().get('results', [])
    
    for result in results:
        print(f"Name: {result.get('name')}")
        print(f"Website: {result.get('website', 'No website found')}")
        print()

# Example usage
find_company_website("Acme Corp", "New York")
print("done")

